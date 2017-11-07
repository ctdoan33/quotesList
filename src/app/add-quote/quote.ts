export class Quote{
	constructor(
		public content: string = "",
		public author: string = "",
		public rating: number = 0,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}