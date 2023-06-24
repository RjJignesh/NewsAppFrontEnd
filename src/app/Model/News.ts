export interface News {
    toLowerCase(): unknown;   
    title : string;  
    detail : string;  
    imagePath:string;
    IsBookMark : boolean;
    date:Date
}

