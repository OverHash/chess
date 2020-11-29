import Roact from '@rbxts/roact';
import { StoreProvider } from '@rbxts/roact-rodux';
import Piece from 'client/piece';
import { chessStore } from 'client/rodux';

export = (target: Frame): (() => void) => {
	const app = (
		/* eslint-disable */
		<StoreProvider store={chessStore}>
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0, 0.8)} pieceName={'R'} isWhiteSquare={false}/>
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.125, 0.8)} pieceName={'N'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.25, 0.8)} pieceName={'B'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.375, 0.8)} pieceName={'Q'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.5, 0.8)} pieceName={'K'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.625, 0.8)} pieceName={'B'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.75, 0.8)} pieceName={'N'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.875, 0.8)} pieceName={'R'} isWhiteSquare={true} />

			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0, 0.2)} pieceName={'r'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.125, 0.2)} pieceName={'n'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.25, 0.2)} pieceName={'b'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.375, 0.2)} pieceName={'q'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.5, 0.2)} pieceName={'k'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.625, 0.2)} pieceName={'b'} isWhiteSquare={false} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.75, 0.2)} pieceName={'n'} isWhiteSquare={true} />
			<Piece size={UDim2.fromScale(0.1, 0.1)} position={UDim2.fromScale(0.875, 0.2)} pieceName={'r'} isWhiteSquare={false} />
		</StoreProvider>
		/* eslint-enable */
	);

	const mount = Roact.mount(app, target);

	return () => {
		print('unmounting piece');
		Roact.unmount(mount);
	};
};
