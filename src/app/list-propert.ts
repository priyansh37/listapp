import { from } from 'rxjs';
import {  PropertyInfo } from './PropertyInfo';

export class ListPropert {
    public id : number;
    public PageIndex : number;
    public TotalPages : number;
    public Count : number;
    public list:PropertyInfo[];
    public sortedField : string;
    public sortedDirection : string;
    public PageSize : number;
    public HasPerviousPage : boolean;
    public HasNextPage : boolean;

}