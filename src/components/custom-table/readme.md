# custom-table



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type       | Default     |
| ------------------ | -------------------- | ----------- | ---------- | ----------- |
| `clearSearch`      | `clear-search`       |             | `any`      | `undefined` |
| `currentPage`      | `current-page`       |             | `number`   | `undefined` |
| `limit`            | `limit`              |             | `number`   | `undefined` |
| `next`             | `next`               |             | `any`      | `undefined` |
| `prev`             | `prev`               |             | `any`      | `undefined` |
| `rows`             | --                   |             | `number[]` | `undefined` |
| `rowsHandler`      | `rows-handler`       |             | `any`      | `undefined` |
| `searchMethod`     | `search-method`      |             | `any`      | `undefined` |
| `tableBody`        | --                   |             | `object[]` | `undefined` |
| `tableHeader`      | --                   |             | `object[]` | `undefined` |
| `toggleSortMethod` | `toggle-sort-method` |             | `any`      | `undefined` |
| `totalData`        | `total-data`         |             | `string`   | `undefined` |


## Dependencies

### Used by

 - [table-wrapper](../table-wrapper)

### Depends on

- [drop-down](../drop-down)
- [plain-button](../plain-button)

### Graph
```mermaid
graph TD;
  custom-table --> drop-down
  custom-table --> plain-button
  table-wrapper --> custom-table
  style custom-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*