import Roact from '@rbxts/roact';
import { StoreProvider } from '@rbxts/roact-rodux';

import Board from '../board';
import { chessStore } from '../rodux';

export = (target: Frame): (() => void) => {
	print('creating app.story');
	const app = (
		<StoreProvider store={chessStore}>
			<Board />
		</StoreProvider>
	);

	const mount = Roact.mount(app, target);

	return () => {
		print('unmounting');
		Roact.unmount(mount);
	};
};
