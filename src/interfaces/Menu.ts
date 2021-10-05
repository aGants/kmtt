export interface PageModel {
  name: string;
  id: string;
  content?: object 
}

export interface SectionModel {
  title: string,
  id: string,
  pages: PageModel[],
}
export interface PopUpModel {
  icon?: string,
  title: string,
}
