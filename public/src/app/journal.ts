export class Journal {
  constructor(
    public mood: string = "",
    public entry: string = "",
    public date: Date = null,
    public _User: string = "",
  ) {}
}
