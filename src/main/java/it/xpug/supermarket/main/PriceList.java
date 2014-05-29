package it.xpug.supermarket.main;

import java.io.*;
import java.util.*;

public class PriceList {

	private String file;

	public PriceList(String file) {
		this.file = file;
	}

	public int findPrice(String code) {
		String property = getProperties().getProperty("price." + code);
		if (null == property) {
			throw new PriceNotFound();
		} else {
			return Integer.valueOf(property);
		}
	}

	public String[] getProducts() {
		Properties property = getProperties();
		Enumeration e = property.propertyNames();
		String prods[] = new String[property.size()];
		int i=0;
		
		while(e.hasMoreElements()){
			String key = (String) e.nextElement();
			prods[i++] = key.split("\\.")[1];
			
		}
		return prods;
	}
	
	private Properties getProperties() {
		try {
			Properties properties = new Properties();
			properties.load(new FileInputStream(file));
			return properties;
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	

}
