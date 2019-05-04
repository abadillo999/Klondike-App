import { Stock } from './stock';
import { Waste } from './waste';
import { Tableau } from './tableau';
import { Card } from './card';
import { Foundation } from './foundation';
import { ALL_SUITS, Suit } from './suit';

export class Board {
    readonly TABLEAUS_SIZE: number = 7;

    _stock: Stock;
    _waste: Waste;
    _foundations: Foundation[];
    _tableaus: Tableau[];

    constructor() {
        this._stock = new Stock();
        this._waste = new Waste();
        this._tableaus = [];
        this._foundations = [];
    }

    get stock(): Stock { return this._stock; }

    get waste(): Waste { return this._waste; }

    get foundations(): Foundation[] { return this._foundations; }

    get tableaus(): Tableau[] { return this._tableaus; }

    buildStock(): void {
        this._stock.build().shuffle();
    }

    buildFoundations(): void {
        for (let i = 0; i < ALL_SUITS.length; i++) {
            this._foundations[i] = new Foundation(ALL_SUITS[i]);
        }
    }

    dealToTableaus(): void {
        this._tableaus = [];
        for (let i = 0; i < this.TABLEAUS_SIZE; i++) {
            let cards: Card[] = [];
            for (let j = 0; j <= i; j++) {
                cards.push(this._stock.pop());
            }
            this._tableaus.push(new Tableau(cards));
        }
    }

    popCurrentWasteCard(): Card {
        return this._waste.pop();
    }

    moveCardToFoundation(card: Card, foundationSuit: Suit): void {
        this.getFoundationBySuit(foundationSuit).push(card);
    }

    moveCardToWaste(): void {
        this._waste.addCard(this._stock.pop());
    }

    restoreStockFromWaste(): void {
        do {
            let card: Card = this.waste.pop();
            card.hide();
            this._stock.push(card);
        } while (!this.waste.empty());
    }

    private getFoundationBySuit(suit: Suit): Foundation {
        return this._foundations.filter(foundation => foundation.suit === suit)[0];
    }
}