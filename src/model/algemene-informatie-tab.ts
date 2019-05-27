import { ApiModelProperty } from '@nestjs/swagger';
import { BodyTextModule } from './bodytext-module';
import uuid = require('uuid');

export class BodyTextTab extends BodyTextModule {}

export const generateDummyAlgemeneInformatieTab = (): BodyTextModule => {
  return {
    html: `<h4>Algemene productinformatie</h4>
    <p>
      Deze heerlijke, glutenvrije noedels zijn gemaakt van biologische bruine rijst en water. Verder niets. Ze
      smaken heerlijk, zijn binnen 5 minuten gaar en passen perfect bij groentegerechten, zeewier, vlees, vis en
      Japanse smaakmakers als miso, tamari en sesamolie. Hiermee zet je binnen mum van tijd een heerlijk oosters
      gerecht op tafel!
    </p>
    <p>Verkrijgbaar in vijf andere glutenvrije varianten, gemaakt van rijst of boekweit.</p>
    <h4>Gebruik</h4>
    <p>
      Breng een pan met water aan de kook. Voeg de noedels toe tot ze volledig in het water gedrenkt zijn. Breng
      opnieuw aan de kook en zet dan het vuur op half vermogen. Laat gedurende 4-5 minuten koken. Giet de noedels af
      in een vergiet en spoel af met koud water.
    </p>
    <h4>Bewaaradvies</h4>
    <p>Na opening in de koelkast bewaren</p>
    <h4>Wat zit er in?</h4>
    <p>
      water, shoyu* (water, SOJAbonen*, TARWE*, zout, koji ferment), rijstazijn* (water, rijst*, koji-ferment),
      druivensap*, yuzusap*, zout, yukousap*, sudachisap*, gezouten sake* (water, rijst*, zout, koji-ferment),
      kombu, gedroogde shiitake paddenstoelen*
    </p>
    <p>* = van biologische landbouw</p>`,
    id: uuid(),
    bottomMargin: '',
    containerAlignment: 'left',
    containerSize: 'full',
    name: 'AlgemeneInformatieTab',
    topMargin: '',
  };
};
