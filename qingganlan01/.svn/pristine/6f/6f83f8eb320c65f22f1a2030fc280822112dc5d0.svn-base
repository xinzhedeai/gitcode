package po;

import javax.persistence.*;

@Table(name = "market_share")
public class MarketShare {
    /**
     * 商店ID
     */
    @Id
    @Column(name = "MARKET_ID")
    private String marketId;

    /**
     * 商店名称
     */
    @Column(name = "MARKET_NAME")
    private String marketName;

    /**
     * 商店地址
     */
    @Column(name = "MARKET_ADDRESS")
    private String marketAddress;

    /**
     * 备注
     */
    @Column(name = "MARKET_DESC")
    private String marketDesc;

    /**
     * 获取商店ID
     *
     * @return MARKET_ID - 商店ID
     */
    public String getMarketId() {
        return marketId;
    }

    /**
     * 设置商店ID
     *
     * @param marketId 商店ID
     */
    public void setMarketId(String marketId) {
        this.marketId = marketId == null ? null : marketId.trim();
    }

    /**
     * 获取商店名称
     *
     * @return MARKET_NAME - 商店名称
     */
    public String getMarketName() {
        return marketName;
    }

    /**
     * 设置商店名称
     *
     * @param marketName 商店名称
     */
    public void setMarketName(String marketName) {
        this.marketName = marketName == null ? null : marketName.trim();
    }

    /**
     * 获取商店地址
     *
     * @return MARKET_ADDRESS - 商店地址
     */
    public String getMarketAddress() {
        return marketAddress;
    }

    /**
     * 设置商店地址
     *
     * @param marketAddress 商店地址
     */
    public void setMarketAddress(String marketAddress) {
        this.marketAddress = marketAddress == null ? null : marketAddress.trim();
    }

    /**
     * 获取备注
     *
     * @return MARKET_DESC - 备注
     */
    public String getMarketDesc() {
        return marketDesc;
    }

    /**
     * 设置备注
     *
     * @param marketDesc 备注
     */
    public void setMarketDesc(String marketDesc) {
        this.marketDesc = marketDesc == null ? null : marketDesc.trim();
    }
}