import { Card2 } from "../../../../_metronic/partials/content/cards/Card2";
import { TablesWidget14, TablesWidget15 } from "../../../../_metronic/partials/widgets";

export function Competitions() {
  return (
    <>
      <div>
        {/* Render TablesWidget14 and pass courses data */}
        <TablesWidget14 />
        <br />
        <TablesWidget15 />
      </div>
    </>
  );
}
