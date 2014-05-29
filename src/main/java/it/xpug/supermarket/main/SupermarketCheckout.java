package it.xpug.supermarket.main;

public class SupermarketCheckout {

	private int total;
	private PriceList priceList;

	public SupermarketCheckout(PriceList priceList) {
		this.priceList = priceList;
	}

	public int scan(String code) {
		int price = priceList.findPrice(code);
		this.total += price;
		return price;
	}

	public int total() {
		return total;
	}
	
	public int reset() {
		this.total = 0;
		return total;
	}
	
	public String[] list() {
		String[] listProds = priceList.getProducts();
		return listProds;
	}

}
