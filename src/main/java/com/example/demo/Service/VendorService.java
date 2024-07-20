package com.example.demo.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.demo.Model.Vendor;

@Service
public class VendorService {
    private Map<String, Vendor> vendors = new HashMap<>();

    public Vendor addVendor(Vendor vendor) {
        vendors.put(vendor.getEmail(), vendor);
        return vendor;
    }

    public Collection<Vendor> getAllVendors() {
        return vendors.values();
    }
}
