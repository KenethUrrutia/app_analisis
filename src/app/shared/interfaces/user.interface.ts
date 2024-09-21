export interface UserResponseInterface {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: UserInterface[];
	support: SupportInterface;
}

export interface UserInterface {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface SupportInterface {
	url: string;
	text: string;
}

export interface UserPostInterface {
	name: string;
	job: string;
}

export interface UserPostResponseInterface {
	name: string;
	job: string;
	id: string;
	createdAt: string;
}
