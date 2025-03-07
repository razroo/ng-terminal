import { Subscription, Observable } from 'rxjs';
import { Terminal } from 'xterm';
// import { DisplayOption } from './display-option';

export interface NgTerminal {
    /**
     * write print charactors or control sequences to the xterm directly
     * @param chars charactors to write
     */
    write(chars: string)
    /**
     * getter only provided
     * A observable to emit printable characters when a user typed on the div for the xterm
     * @deprecated since version 2.1.0
     */
    readonly keyInput: Observable<string>
    
    /**
     * getter only provided
     * A observable to emit keys and keyboard event when a user typed on the div for the xterm
     */
    readonly keyEventInput: Observable<{key: string; domEvent: KeyboardEvent;}>
    /**
     * getter only provided
     * return the core object of the terminal where you can control everything directly
     */
    readonly underlying: Terminal
    /**
     * change row, col, draggable
     */
    setDraggable(draggable: boolean): void;
    setRows(rows: number): void;
    setCols(cols: number): void;
    setMinHeight(height: number): void;
    setMinWidth(width: number): void;
    setStyle(styleObject: any): void;
}
