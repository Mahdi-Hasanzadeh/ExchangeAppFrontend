# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY *.sln ./
COPY Authentication/*.csproj ./Authentication/
COPY Authentication.Client/*.csproj ./Authentication.Client/
COPY Shared/*.csproj ./Shared/

RUN dotnet restore

COPY . .

RUN dotnet publish Authentication/Authentication.csproj -c Release -o /out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /out .

EXPOSE 80

ENTRYPOINT ["dotnet", "Authentication.dll"]
