import Roact from '@rbxts/roact';
import { Players } from '@rbxts/services';
import { makeHello } from 'shared/module';

import { app } from './app';

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild('PlayerGui');

print(makeHello('main.client.ts'));

Roact.mount(app, playerGui);
