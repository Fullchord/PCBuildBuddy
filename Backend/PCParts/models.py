from django.db import models

# Create your models here.
class PCParts(models.Model):
  id = models.AutoField(
    primary_key=True
  )

  text = models.TextField(
    max_length=1000,
    null=False,
    blank=False
  )

  creation_date = models.DateTimeField(
    auto_now_add=True,
    null=False,
    blank=False
  )

  last_updated = models.DateTimeField(
    auto_now=True,
    null=False,
    blank=False
  )


  def __str__(self):
    return 'ID: ' + str(self.id) + ' ' + self.text

  class Meta:
    db_table = 'PCParts'