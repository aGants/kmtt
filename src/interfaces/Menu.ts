export default interface Page {
  name: string;
  id: string;
  content?: object 
}

export default interface Section {
  title: string,
  id: string,
  pages: Page[],
}