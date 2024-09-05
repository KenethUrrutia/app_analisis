export interface DataInterface {
	iddata?: number;
	description: string;
	x: boolean;
	y: boolean;
	z: boolean;
}

export interface DataRelationsInterface extends DataInterface {
	score: number[];
}

export interface DataExtendsInterface extends Omit<DataRelationsInterface, 'iddata' | 'x' | 'y'> {}
