export namespace NewsConstnts {

    //Date formats
    export const Year = "YYYY";
    export const Month = "MMMM";
    export const UtcDate = "YYYY-MM-DD";
    export const LocalDate = "DDMMyyyy";

    //Api Names
     export const AllNews = 'News?bookMark=false';
     export const BookMarkList = 'News/FetchAllBookmarkedNews?bookMark=true';
     export const SearchAllNews = 'News/SearchAllNews?searchText';
     export const SearchInBookmark = '&bookMarkSearch=true';
     export const NotSearchInBookmark = '&bookMarkSearch=false';
     export const BookMarkNews = 'News/BookMarkNews?newsId';
     

     //Bookmark confirmation
     export const ConfirmTitle = 'News bookmark confirmation';
     export const ConfirmText = 'Are you sure want to bookmark this news?';
     export const ConfirmIcon = 'warning';
     export const ConfirmBtnTxt =  'Yes, bookmark it!';
     export const CancelBtnTxt = 'No, keep it as default news';
     export const ShowCancelBtn = true
     export const BookmarkSuccessTitle = 'Bookmarked!';
     export const BookmarkSuccessText = 'This news has been Bookmarked.';
     export const BookmarkSuccessICon = 'success';
     export const BookmarkCancelTitle = 'Cancelled';
     export const BookmarkCancelText = 'This news is not bookmarked';
     export const BookmarkCancelIcon = 'error';


     //app component html 
    export const TemsOffUse = 'Term of Use';
    export const PriPol = 'Privacy Policy';
    export const Tredmark = 'Trademarks'

    }
  