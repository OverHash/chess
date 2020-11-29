import Roact, { Element } from '@rbxts/roact';
import RoactRodux from '@rbxts/roact-rodux';

import Piece from './piece';
import { ChessStore, ChessStoreActions } from './rodux';
import { BLACK_COLUMNS, EIGHTH_BOARD, getPieceLocationData, getPiecePosition } from './utility';

interface BoardProps extends MappedProps, MappedDispatch {}
interface BoardState {}

interface MappedProps {
	readonly pieces: ChessStore['currentBoard'];
}

interface MappedDispatch {}

/**
 * A class to hold the board.
 */
class Board extends Roact.Component<BoardProps, BoardState> {
	/**
	 * Creates a board.
	 * @param props The props to create the board.
	 */
	constructor(props: BoardProps) {
		super(props);
	}

	/**
	 * Creates the new board.
	 */
	render() {
		const pieces: Array<Element> = [];
		for (const [k, v] of ipairs(this.props.pieces)) {
			const { row, column } = getPieceLocationData(k - 1);
			const isWhite = !BLACK_COLUMNS.has(column) && (row + 1) % 2 === 0;
			pieces.push(
				<Piece
					size={UDim2.fromScale(EIGHTH_BOARD, EIGHTH_BOARD)}
					position={getPiecePosition(k - 1)}
					pieceName={v}
					isWhiteSquare={isWhite}
					Key={k}
				/>,
			);
		}

		return (
			<frame
				Key={'gameBoard'}
				Size={UDim2.fromScale(1, 1)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
			>
				<uigradient
					Offset={new Vector2(-0.25, -0.25)}
					Rotation={60}
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(72, 72, 72)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(36, 36, 36)),
						])
					}
				/>
				{pieces}
			</frame>
		);
	}
}

// eslint-disable-next-line jsdoc/require-jsdoc
const mapStateToProps = (state: ChessStore): MappedProps => {
	return {
		pieces: state.currentBoard,
	};
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const mapDispatchToProps = (dispatch: Rodux.Dispatch<ChessStoreActions>): MappedDispatch => {
	return {};
};

export default RoactRodux.connect(mapStateToProps, mapDispatchToProps)(Board);
