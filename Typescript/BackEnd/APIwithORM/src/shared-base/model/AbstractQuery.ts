export interface IAbstractQuery{
    search?: string;
    itemsPerPage?: number;
    pageIndex?: number;
    isDeleted?: boolean;
}

export class AbstractQuery extends AbstractModelP
