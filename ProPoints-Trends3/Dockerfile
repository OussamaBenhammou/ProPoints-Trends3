# Gebruik een officiële Nginx-runtime als ouderafbeelding
FROM nginx-1.25.3 

# Stel de werkmap in de container in op /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Kopieer de inhoud van de huidige map naar de container op /usr/share/nginx/html
COPY . .

# Maak poort 80 beschikbaar voor de wereld buiten deze container
EXPOSE 8080

# Voer nginx uit wanneer de container wordt gestart
CMD ["nginx", "-g", "daemon off;"]