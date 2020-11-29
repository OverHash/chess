import Rodux from '@rbxts/rodux';
import t from '@rbxts/t';

import { CurrentBoardActions, currentBoardReducer, setupBoard } from './currentBoard';

export const isWhitePiece = t.literal('P', 'R', 'N', 'B', 'K', 'Q');
export type WhitePiece = t.static<typeof isWhitePiece>;
export const isBlackPiece = t.literal('p', 'r', 'n', 'b', 'k', 'q');
export type BlackPiece = t.static<typeof isBlackPiece>;
export const isChessPiece = t.union(isWhitePiece, isBlackPiece);
export type ChessPiece = t.static<typeof isChessPiece>;
export const isBoardPiece = t.union(isChessPiece, t.literal('_'));
export type BoardPiece = t.static<typeof isBoardPiece>;

export const isChessStore = t.interface({ currentBoard: t.array(isBoardPiece) });
export type ChessStore = t.static<typeof isChessStore>;

export type ChessStoreActions = (Rodux.Action<'@@INIT'> | CurrentBoardActions) & Rodux.AnyAction;

const ChessStoreReducer = Rodux.combineReducers<ChessStore, ChessStoreActions>({
	currentBoard: currentBoardReducer,
});

export const chessStore = new Rodux.Store<ChessStore, ChessStoreActions>(ChessStoreReducer);
chessStore.dispatch(setupBoard());

print('made new chess store');
