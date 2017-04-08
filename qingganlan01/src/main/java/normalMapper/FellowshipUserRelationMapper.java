package normalMapper;

import java.util.List;
import normalPo.FellowshipUserRelation;
import normalPo.FellowshipUserRelationExample;
import org.apache.ibatis.annotations.Param;

public interface FellowshipUserRelationMapper {
    int countByExample(FellowshipUserRelationExample example);

    int deleteByExample(FellowshipUserRelationExample example);

    int deleteByPrimaryKey(String fsUsRelationId);

    int insert(FellowshipUserRelation record);

    int insertSelective(FellowshipUserRelation record);

    List<FellowshipUserRelation> selectByExample(FellowshipUserRelationExample example);

    FellowshipUserRelation selectByPrimaryKey(String fsUsRelationId);

    int updateByExampleSelective(@Param("record") FellowshipUserRelation record, @Param("example") FellowshipUserRelationExample example);

    int updateByExample(@Param("record") FellowshipUserRelation record, @Param("example") FellowshipUserRelationExample example);

    int updateByPrimaryKeySelective(FellowshipUserRelation record);

    int updateByPrimaryKey(FellowshipUserRelation record);
}