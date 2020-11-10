import { PackagePriceMatser } from './PackagePriceMatser';

export interface PropertyInfo {
  Id: number;
  PropertyID: string;
  PropertyGUID:string;
  PropertyShortName: string;
  Address: string;  
  CityName: string;
  ProvinceName: string;
  CountryName: string;
  PropertyTypeName: string;
  MinPackage:any;
  PropertyFacilitiesDtlMasters:any;
  PropertyPictures:any;
}
