FROM eclipse-temurin:17-jre
WORKDIR /app
COPY target/StudentManagementApplication-0.0.1-SNAPSHOT.war studentmanagementapp.war
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/studentmanagementapp.war" ]
 