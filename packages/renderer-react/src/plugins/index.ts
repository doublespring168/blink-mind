import { CreateModelPlugin } from './create-model';
import { EventPlugin } from './event';
import { GetValuePlugin } from './get-value';
import { HotKeyPlugin } from './hotkey';
import { I18nPlugin } from './i18n';
import { LayoutPlugin } from './layout';
import { OperationPlugin } from './operation';
import { ReactPlugin } from './react';
import { SimpleTextEditorPlugin } from './simple-text-editor';
import { StylePlugin } from './style';
import { ThemePlugin } from './theme';
import { PlatformPlugin } from './platform';

export function DefaultPlugin() {
  return [
    ReactPlugin(),
    LayoutPlugin(),
    OperationPlugin(),
    StylePlugin(),
    EventPlugin(),
    HotKeyPlugin(),
    GetValuePlugin(),
    SimpleTextEditorPlugin(),
    CreateModelPlugin(),
    ThemePlugin(),
    PlatformPlugin(),
    I18nPlugin()
  ];
}
