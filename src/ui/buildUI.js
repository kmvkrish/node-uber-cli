import Table from 'cli-table3';

class BuildUI {
    constructor() {
    }

    static buildTimeEstimates(times) {
        const table = new Table();
        const headers = [{
          content: "Vehicle",
          "hAlign": "center"
        }, {
            content: "Duration(ETA) in Mins.",
            "hAlign": "center"
        }];
        table.push(headers);
        times.forEach(row => {
          table.push(
            [row.vehicleName, row.duration]
          );
        });
        return table.toString();
    }

    static buildPriceEstimates(prices) {
      const table = new Table();
      const headers = [
        {
          content: "Vehicle",
          halign: "center"
        },
        {
          content: "Price",
          halign: "center"
        },
        {
          content: "Trip Distance",
          halign: "center"
        },
        {
          content: "Duration (in Mins.)",
          halign: "center"
        },
        {
          content: "Surge Applicable?",
          halign: "center"
        }
      ];
      table.push(headers);
      prices.forEach(row => {
        table.push(
          [row.vehicleName, row.price, row.distance, row.duration, row.surge]
        );
      });
      return table.toString();
    }
}

export default BuildUI;
