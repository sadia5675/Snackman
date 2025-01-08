package de.hs_rm.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;

@SpringBootApplication(scanBasePackages = "de.hs_rm.backend")
public class BackendApplication {

	public static void main(String[] args) {

		/* if base/maps not exist, create base/maps outside of java */
		ensureDirectoriesExist("../base/maps");

		SpringApplication.run(BackendApplication.class, args);
	}

	private static void ensureDirectoriesExist(String path) {
		File directory = new File(path);

		if (!directory.exists()) {
			if (directory.mkdirs()) {
				System.out.println("Directory created successfully: " + directory.getAbsolutePath());
			} else {
				System.err.println("Failed to create directory: " + directory.getAbsolutePath());
			}
		} else {
			System.out.println("Directory already exists: " + directory.getAbsolutePath());
		}
	}

}
