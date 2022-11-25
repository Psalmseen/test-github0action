import type { IWindow } from 'happy-dom';
import '../sample-element/sample-element';
declare global {
    interface Window extends IWindow {
    }
}
