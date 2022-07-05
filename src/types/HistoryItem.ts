export type HistoryItemType = {
  date: string;
  value: number;
};

enum HistoryItem {
  Date = "date",
  Value = "value",
}

export default HistoryItem;
