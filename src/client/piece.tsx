import Roact from '@rbxts/roact';
import RoactRodux from '@rbxts/roact-rodux';

import { BoardPiece, ChessStore, ChessStoreActions } from './rodux';

const namesToIds = {
	['p']: 6016353027,
	['n']: 6016352645,
	['b']: 6016351706,
	['r']: 6016353931,
	['k']: 6016352277,
	['q']: 6016353457,

	['P']: 6016355785,
	['N']: 6016355315,
	['B']: 6016354367,
	['R']: 6016356825,
	['K']: 6016354870,
	['Q']: 6016356191,
} as const;

interface PieceProps extends MappedProps, MappedDispatch {
	/**
	 * The size of the chess piece.
	 */
	size: UDim2;
	/**
	 * The position of the chess piece.
	 */
	position: UDim2;
	/**
	 * The type of the chess piece.
	 */
	pieceName: BoardPiece;
	/**
	 * If the chess square is white or not.
	 */
	isWhiteSquare: boolean;
}
interface PieceState {}

interface MappedProps {}
interface MappedDispatch {}

/**
 * A component for displaying chess pieces.
 */
class Piece extends Roact.Component<PieceProps, PieceState> {
	/**
	 * Creates a new chess piece.
	 * @param props The props to create the piece.
	 */
	constructor(props: PieceProps) {
		super(props);
	}

	/**
	 * Renders the chess piece.
	 */
	render() {
		return (
			<imagebutton
				Size={this.props.size}
				Position={this.props.position}
				Image={this.props.pieceName !== '_' ? 'rbxassetid://' + namesToIds[this.props.pieceName] : ''}
				SizeConstraint={Enum.SizeConstraint.RelativeYY}
				BackgroundColor3={this.props.isWhiteSquare ? new Color3(1, 1, 1) : new Color3(0, 0, 0)}
			/>
		);
	}
}

// eslint-disable-next-line jsdoc/require-jsdoc
const mapStateToProps = (state: ChessStore): MappedProps => {
	return {};
};

// eslint-disable-next-line jsdoc/require-jsdoc
const mapDispatchToProps = (dispatch: Rodux.Dispatch<ChessStoreActions>): MappedDispatch => {
	return {};
};

export default RoactRodux.connect(mapStateToProps, mapDispatchToProps)(Piece);
