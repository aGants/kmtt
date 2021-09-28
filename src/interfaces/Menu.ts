export default interface Page {
  name: string;
  id?: string;
}

export default interface Section {
  title: string,
  pages: Array<Page>,
}