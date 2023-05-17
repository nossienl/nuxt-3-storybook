// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import avroTros from './AVROTROS';

addons.setConfig({
    theme: avroTros,
});