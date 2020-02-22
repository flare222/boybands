from django.db import models

class Boyband(models.Model):
  song_lyrics = models.CharField(max_length=600)
  song_name = models.CharField(max_length=200)
  band_name = models.CharField(max_length=200)

  def __str__(self):
    return self.song_name