import Rodux from '@rbxts/rodux';

import { ChessStore } from '.';

export type CurrentBoardType = ChessStore['currentBoard'];
export type CurrentBoardActions = ActionReceivedSetupBoard;

export interface ActionReceivedSetupBoard extends Rodux.Action<'SetupBoard'> {}

/**
 * Resets a board to the reset state.
 */
export function setupBoard(): ActionReceivedSetupBoard & Rodux.AnyAction {
	return {
		type: 'SetupBoard',
	};
}

export const currentBoardReducer = Rodux.createReducer<CurrentBoardType, CurrentBoardActions>([], {
	/**
	 * Sets up the board.
	 */
	SetupBoard: (state, action) => {
		/* eslint-disable */
		return [
			'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
			'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
			'_', '_', '_', '_', '_', '_', '_', '_',
			'_', '_', '_', '_', '_', '_', '_', '_',
			'_', '_', '_', '_', '_', '_', '_', '_',
			'_', '_', '_', '_', '_', '_', '_', '_',
			'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
			'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
		];
		/* eslint-enable */
	},
});
