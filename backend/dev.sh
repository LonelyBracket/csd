#!/bin/bash
case "$1" in
  start)   docker compose up -d && echo "Strapi: http://localhost:1337/admin" ;;
  stop)    docker compose down ;;
  logs)    docker compose logs -f strapi ;;
  restart) docker compose restart strapi ;;
  rebuild) docker compose down && docker compose build --no-cache && docker compose up -d ;;
  status)  docker compose ps && curl -s http://localhost:1337/_health && echo " OK" || echo " Not ready" ;;
  shell)   docker compose exec strapi sh ;;
  *)       echo "Usage: ./dev.sh {start|stop|logs|restart|rebuild|status|shell}" ;;
esac
