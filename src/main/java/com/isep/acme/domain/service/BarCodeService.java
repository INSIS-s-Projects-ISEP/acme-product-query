package com.isep.acme.domain.service;

import net.sourceforge.barbecue.Barcode;

import net.sourceforge.barbecue.BarcodeFactory;
import net.sourceforge.barbecue.BarcodeImageHandler;

import java.awt.*;
import java.awt.image.BufferedImage;

public class BarCodeService {

    private static final Font BARCODE_TEXT_FONT = new Font(Font.SANS_SERIF, Font.PLAIN, 14);

    public static BufferedImage getBarcode(String sku) throws Exception {
        Barcode barcode = BarcodeFactory.createCode128(sku);
        barcode.setFont(BARCODE_TEXT_FONT);
        barcode.setLabel(sku);
        BufferedImage image = BarcodeImageHandler.getImage(barcode);
        return image;

    }
}
