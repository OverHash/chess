import Roact from '@rbxts/roact';
import { StoreProvider } from '@rbxts/roact-rodux';

import Board from './board';
import { chessStore } from './rodux';

export const app = (
	<StoreProvider store={chessStore}>
		<screengui Key={'ChessBoard'} ResetOnSpawn={false} IgnoreGuiInset={true}>
			<Board />
		</screengui>
	</StoreProvider>
);
