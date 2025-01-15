package de.hs_rm.backend;
import java.io.*;
import java.nio.file.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ResourceExtractor {
    private static final Logger LOGGER = Logger.getLogger(ResourceExtractor.class.getName());

    public static void extractScript(String resourcePath, String outputPath) throws IOException {
        // Lade die Ressource aus der JAR-Datei
        InputStream resourceStream = ResourceExtractor.class.getResourceAsStream(resourcePath);
        if (resourceStream == null) {
            LOGGER.severe("Resource not found: " + resourcePath);
            throw new FileNotFoundException("Resource not found: " + resourcePath);
        }

        // Zielpfad festlegen (aktuelles Verzeichnis + Skriptname)
        Path outputFilePath = Paths.get(outputPath);

        // Kopiere die Ressource in das Zielverzeichnis
        try (OutputStream outStream = new FileOutputStream(outputFilePath.toFile())) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = resourceStream.read(buffer)) != -1) {
                outStream.write(buffer, 0, bytesRead);
            }
            LOGGER.info("Script extracted to: " + outputFilePath.toAbsolutePath());
        } catch (IOException e) {
            LOGGER.log(Level.SEVERE, "Failed to write script to: " + outputPath, e);
            throw e;
        }
    }
}
