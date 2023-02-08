import axios from 'axios';
import { Component, h, Prop, State } from '@stencil/core';

import { formatJSON } from '../../utils/utils';


@Component({
  tag: 'editor-page',
  scoped: true,
})
export class EditorPage {
  @Prop() url: string;
  @State() nodeList: string[] = [];
  @State() queryDocument: string = "\n\n\n\n";
  @State() parameterDocument: string = "\n\n\n\n"
  @State() nodeData: Array<{}> = [];
  @State() nodeDataColumns: {}[] = [];

  @State() isLoading: boolean = false;

  fetchNavigators = () => {
    axios
      .get(`${this.url}/nodes`)
      .then((res: any) => {
        this.nodeList = res.data.nodes;
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchData = async (item) => {
    this.isLoading = true;
    try {
      const res = await axios.post(`${this.url}/query/builder/${item}`, {
        limit: 10,
        offset: 0,
        order: {},
        filter: {}
      });

      this.nodeData = res.data.nodes;
      this.queryDocument = res.data.query;
      this.parameterDocument = formatJSON(res.data.queryParameters);

      let allKeys = [];
      console.log("ESSSSS", this.nodeData)
      this.nodeData.map(obj => {
        let keys = Object.keys(obj);
        allKeys = [...new Set([...allKeys, ...keys])];
      });
      console.log("all keys", allKeys)
      this.nodeDataColumns = [];
      allKeys.map(key => {
        let obj = {};
        obj['title'] = key;
        obj["filter"] = {
          searchable: true,
          sortable: true,
        };
        obj["alias"] = key;
        obj["click"] = {
          clickable: false,
        };
        this.nodeDataColumns.push(obj);
      })
    } catch (error) {
      console.log({ error })
    }
    this.isLoading = false;
  }

  onClickRun(query: string, parameter: object) {
    console.log({ query, parameter });
  }

  render() {
    return (
      <div>
        <div class="w-auto flex justify-center gap-4 mt-4">
          <aside class="w-80" aria-label="Sidebar">
            <h2 class="pb-6 font-mono text-lg font-bold leading-7 text-gray-600">Nodes</h2>
            <node-item fetchNavigators={this.fetchNavigators} fetchData={this.fetchData} nodeList={this.nodeList}></node-item>
          </aside>
          <div class="w-96" style={{ width: '72.5rem' }}>
            <h2 class="pb-3 font-mono text-lg font-bold leading-7 text-gray-600">Write your Gremlin Query Here</h2>
            <code-editor-updated
              queryDocument={this.queryDocument}
              parameterDocument={this.parameterDocument}
              errorMessage={null}
              isLoading={this.isLoading}
              onClickRun={this.onClickRun}
            ></code-editor-updated>

            {this.nodeData && !this.isLoading && <editor-res-updated result={this.nodeData} headerList={this.nodeDataColumns}></editor-res-updated>}
          </div>
        </div>
      </div>
    )
  }
}