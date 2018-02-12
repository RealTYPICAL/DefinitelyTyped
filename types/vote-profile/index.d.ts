// Type definitions for vote-profile x.x
// Project: https://github.com/thirdcreed/vote-profile
// Definitions by: James Tooley <https://github.com/RealTYPICAL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7.1

export interface Vote {
    key: string;
    ordering: string[];
    numVotes: number;
}

export declare class Profile {

    constructor(systems: string[]);

    public setAlternatives(): void;

    public find(ordering: string[]): Vote[];

    public vote(ballot: Vote): void;

    public each(visitFunc: (ordering: string[], voteValue: number, index: number) => void): void;

    public extend(addOn: string): void;

    public score(scoreMethod: string): number;

}

