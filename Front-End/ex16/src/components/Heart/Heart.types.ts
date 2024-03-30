export type Item = {
    name: string;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
    id: number;
};

export interface HeartProps {
    onClick: () => void;
    selected: boolean;
    testId: string;
        
}