import {Serie} from './Serie.js';
import { series } from './data.js';

const component: HTMLElement = document.getElementById('series')!;
const avgcomponent: HTMLElement = document.getElementById('promedio')!;

series.forEach(c => createRow(c));
avgcomponent.innerHTML = `Seasons average: ${avg()}`;

function createRow(serie: Serie):void{
    const row = document.createElement('tr');
    row.innerHTML = (`
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
    component.appendChild(row);
}

function avg(): string{
    let avg = 0;
    series.forEach(s => avg += s.seasons);
    avg /= series.length;
    return Math.round(avg).toString();
}