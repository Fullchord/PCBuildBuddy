
from rest_framework import serializers

from .models import PCParts


class PCPartsSerializer(serializers.ModelSerializer):
  text = serializers.CharField(max_length=1000, required=True)

  def create(self, validated_data):
    # Once the request data has been validated, we can create a PCPart instance in the database
    return PCParts.objects.create(
      text=validated_data.get('text')
    )

  def update(self, instance, validated_data):
     # Once the request data has been validated, we can update the PCPart instance in the database
    instance.text = validated_data.get('text', instance.text)
    instance.save()
    return instance

  class Meta:
    model = PCParts
    fields = (
      'id',
      'text'
    )