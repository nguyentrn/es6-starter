import axios from "axios";
import cheerio from "cheerio";

import Coin from "./model/Coin";
import db from "./database";

(async () => {
  for (let i = 0; i < 8; i++) {
    const res = await axios(
      `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${
        i * 1000 + 1
      }&limit=1000&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,platform,tags`
    );
    await db("coins")
      .insert(
        res.data.data.cryptoCurrencyList.map((c) => {
          delete c.auditInfoList;
          c.quotes = c.quotes[0];
          return c;
        })
      )
      .onConflict("id")
      .merge();
    console.log(i);
  }
})();
