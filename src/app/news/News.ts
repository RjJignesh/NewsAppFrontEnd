export interface News {
    toLowerCase(): unknown;   
    id :string,
    title : string;  
    detail : string;  
    imagePath:string;
    isBookMark : boolean;
    date:Date,
    provider:string
}

