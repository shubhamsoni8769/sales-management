export type IHsnDetails = {
    id?: string;
    hsnNo: string;
    gst: string | number;
};
export type IHsnTable = {
    rowData: IHsnDetails[]
}