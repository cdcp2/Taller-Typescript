import {Serie} from './Serie.js';
import { series } from './data.js';

let component: HTMLElement = document.getElementById('series')!;
let avgcomponent: HTMLElement = document.getElementById('promedio')!;

series.forEach(c => createRow(c));
avgcomponent.innerHTML = `Seasons average: ${avg()}`;

function createRow(serie: Serie):void{
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        ${serie.name}
    </td>
    <td>
        ${serie.station}
    </td>
    <td>
        ${serie.seasons}
    </td>`);
    component.appendChild(fila);
}

function avg(): string{
    let avg = 0;
    series.forEach(s => avg += s.seasons);
    avg /= series.length;
    return Math.round(avg).toString();
}