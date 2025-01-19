package de.hs_rm.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.File;
import java.io.IOException;
import java.util.logging.Logger;

@SpringBootApplication(scanBasePackages = "de.hs_rm.backend")
@EnableScheduling
public class BackendApplication {

	private static final Logger LOGGER = Logger.getLogger(BackendApplication.class.getName());
	public static void main(String[] args) {

		/* if base/maps not exist, create base/maps outside of java */
		ensureDirectoriesExist("base/maps");
		ensureDirectoriesExist("base/skripte");

		try {
            // Extrahiere script.py aus resources/scripts/script.py
			ResourceExtractor.extractScript("/maps/Hallo.txt", "base/maps/Hallo.txt");
			ResourceExtractor.extractScript("/skripte/ChickenBotMovement.py", "base/skripte/ChickenBotMovement.py");

            // Weitere Logik hier
        } catch (IOException e) {
            LOGGER.severe("Failed to extract script: " + e.getMessage());
        }

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
